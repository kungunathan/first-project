/* eslint-disable react-refresh/only-export-components */
const name = ['Nathaniel', 'Ian']

function Post(){
    const chosenName = Math.random() > 0.5 ? name[0] : name[1];
    return(
    <div>
        <p>{chosenName}</p>
        <p>Nextjs is awesome!</p>
        
    </div>
    );
}
export default Post();