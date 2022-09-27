import { useState, useEffect } from 'react'


function useDelayUnmount(isMounted, delayTime) {
	const [shouldRender, setShouldRender] = useState(false);
  
	useEffect(() => {
        let timeoutId;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        } else if (!isMounted && shouldRender) {
            timeoutId = setTimeout(() => setShouldRender(false), delayTime);
        }
        return () => clearTimeout(timeoutId);
	}, [isMounted, delayTime, shouldRender]);
	return shouldRender;
}


export default useDelayUnmount;