import { useEffect, useState } from 'react';

export const useChecklist = (url) => {
  const [checklist, setChecklist] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setChecklist(data);
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

  return { checklist };
};
