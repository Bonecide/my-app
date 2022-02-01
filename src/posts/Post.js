export default function Post ({id,title,body}) {

return(
<div key={id}>
        <p>{title}</p>
        <p>{body}</p>
 </div>
)
}