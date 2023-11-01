import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog ,handleAddToBookmark }) => {
    const {title ,cover, author , author_img,reading_time ,posted_date,hashtags}= blog
    return (
        <div>
            <img className=" rounded mb-8 "src={cover} alt={`cover pic of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex' >
                    <img className='rounded-full w-16 h-16' src={author_img}  alt="" />
                
                <div> 
                    {author} <br></br>  
                   <span className='font-bold' > publish date : </span>{posted_date}
                    
                </div>
                     
                </div>
                <div>
                 <span>{reading_time} min read</span> 
                 <button onClick={()=>handleAddToBookmark(blog)}
                 className='m-2 text-2xl text-red-600'
                 ><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <div>
                {hashtags.map((hash ,idx)=> <span key = {idx}><a href=''># {hash}</a></span>)}
            </div>
        </div>
    );
};
Blog.propTypes ={blog:PropTypes.object.isRequired
,handleAddToBookmark: PropTypes.func
}
export default Blog;