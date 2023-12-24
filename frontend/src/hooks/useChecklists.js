import { useEffect, useState } from 'react';

export const useChecklists = (url) => {
  const [checklists, setChecklists] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setChecklists(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!cancelled) {
      fetchData();
    }

    return () => {
      setCancelled(true);
    };
  }, [url]);

  return { checklists };
};
