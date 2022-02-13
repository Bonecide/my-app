import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "./theme"

export default function HelloWorld({  isActive = false, activate, children }) {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json()
        setPosts(result)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, []) 


    const { theme } = useContext(ThemeContext)

    const styles = {
        light: {
            color: 'white',
        },
        dark: {
            color: 'black',
        }
    }

    return !!posts.length ? (
        <div styles={styles[theme]} >
            {loading && 'Loading...'}
            {posts.map((post) => (
                <div className={`theme c-${theme}`} key={post.id}>{post.title}</div>
            ))}
            
        </div>
    ) : <div>Нет постов</div>
}