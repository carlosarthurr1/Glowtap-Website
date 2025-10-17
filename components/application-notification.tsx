"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types
type Notification = {
  id: string;
  name: string;
  location: string;
};

const names = [
  'Ana', 'Maria', 'Joana', 'Inês', 'Beatriz', 'Leonor', 'Matilde', 'Carolina',
  'Mariana', 'Sofia', 'Madalena', 'Lara', 'Camila', 'Francisca', 'Margarida',
  'Benedita', 'Alice', 'Eva', 'Bianca', 'Clara', 'Laura', 'Daniela', 'Andreia',
  'Filipa', 'Patrícia', 'Sandra', 'Cátia', 'Sara', 'Diana', 'Isabel', 'Lúcia',
  'Helena', 'Raquel', 'Sílvia', 'Tânia', 'Vera', 'Rita', 'Márcia', 'Bruna',
  'Telma', 'Célia', 'Carla', 'Fátima', 'Paula', 'Manuela', 'Susana', 'Vânia',
  'Elisabete', 'Marta', 'Irina', 'Juliana', 'Mónica', 'Cristiana', 'Aurora',
  'Noa', 'Olívia', 'Amélia', 'Antónia', 'Ivone', 'Renata', 'Lorena', 'Teresa',
  'Salomé', 'Ágata', 'Rosário', 'Estela', 'Celeste', 'Adelaide', 'Zélia', 'Ema',
  'Rosa', 'Júlia', 'Nayara', 'Yasmin', 'Bárbara', 'Eduarda', 'Vitória', 'Samanta',
  'Milene', 'Gracinda', 'Glória', 'Rebeca', 'Dalila', 'Joice', 'Nádia', 'Marisa',
  'Elisandra', 'Cleo', 'Mirna', 'Giovana', 'Débora', 'Ivana', 'Miriam', 'Natália',
  'Jéssica', 'Eloá', 'Samara', 'Fabiana', 'Kátia', 'Nayla'
];

const locations = ['Braga', 'Porto', 'Lisboa', 'Coimbra'];

const ApplicationNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    let mounted = true;
    let timers: NodeJS.Timeout[] = [];
    
    const addNotification = () => {
      if (!mounted) return;
      
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      const newNotification = {
        id: Date.now().toString(),
        name: randomName,
        location: randomLocation
      };
      
      setNotifications(prev => [...prev, newNotification]);
      
      const removeTimer = setTimeout(() => {
        if (mounted) {
          setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
        }
      }, 5000);
      
      timers.push(removeTimer);
    };
    
    const createNotifications = () => {
      if (!mounted) return;
      
      // Add a notification
      addNotification();
      
      // Sometimes add a second notification shortly after
      if (Math.random() > 0.7) {
        const doubleTimer = setTimeout(() => {
          addNotification();
        }, 800);
        timers.push(doubleTimer);
      }
      
      // Schedule next batch with much longer random delay
      const nextTimer = setTimeout(() => {
        createNotifications();
      }, Math.random() * 50000 + 10000); // 10-60 seconds
      
      timers.push(nextTimer);
    };
    
    // Initial delay
    const initialTimer = setTimeout(() => {
      createNotifications();
    }, Math.random() * 3000 + 1000);
    
    timers.push(initialTimer);
    
    return () => {
      mounted = false;
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-black/10 shadow-lg rounded-lg p-3 max-w-xs"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-xs font-medium">
                {notification.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium">
                  <span className="font-semibold">{notification.name}</span> aplicou para criar conteúdo.
                </p>
                <p className="text-xs text-gray-500 mt-1">{notification.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationNotification;
