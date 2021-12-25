import { createContext, useContext, useState, useEffect } from 'react'
import PostContext from './PostContext';
import AuthProvider from './AuthProvider';
import AuthContext from './AuthContext';
import useAxios from '../utils/useAxios';
// import { useParams } from "react-router-dom";

export const PostProvider = ({children}) => {
    let [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false);
    let [postfield, setPostfield] = useState('');
    let api = useAxios()

    let {ShowAlert, user} = useContext(AuthContext)

    let getmedata = () => {
        console.log('please login')
    }

    useEffect(()=> {
        user?getPosts() : getmedata()
    }, [])

    let getPosts = async() =>{
        let response = await api.get('/post/post/')

        if(response.status === 200){
            setPosts(response.data)
            console.log(response.data)
        }
        
    }

    
    const AddPost = async (e) => {
        e.preventDefault()
        if (postfield.length === 0){
            alert('Enter some data')
        }
        else if (postfield.length > 600){
            alert('Max Lenght = 600 character only')
        }
        else {
        try{
            let response = await api.post('/post/post/', {'content': postfield, 'author': user.id})
            console.log(response.data)
            setPosts([response.data, ...posts])
            setPostfield('')
            setModal(false)
            ShowAlert('Post is Added', "success")
        }
        catch(error) {
            console.log(error)
        }
    }
        
    }



    let contextData = {
        api,
        posts,
        setPosts,
        getPosts,
        AddPost,
        modal,
        setModal,
        postfield,
        setPostfield
    }



    return (
        
        
        
        <div>
        <PostContext.Provider value={contextData} >
            {children}
        </PostContext.Provider>            
        </div>
    )
}

export default PostProvider;
