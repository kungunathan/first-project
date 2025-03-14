import classes from './PostsList.module.css'
import Post from  './Post'
function PostsList(){
    <main>
      <Post author="Nathaniel" body="Is leaning React"/>
      <Post author="Ian" body="Is learning ASL"/>
    </main>
    return(
        <ul className={classes.ul}>
            <li><Post></Post></li>
            <li><Post></Post></li>
        </ul>
    )
}
export default PostsList