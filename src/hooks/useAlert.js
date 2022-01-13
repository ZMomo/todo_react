import { useEffect } from "react"

const useAlert = (message, counter) => {

    useEffect(() => {
        
        if (counter > 3) {
            alert("Attention le composant à été détruis plus de 3 fois")
        }

        return () => alert(message);
    })
}

export default useAlert