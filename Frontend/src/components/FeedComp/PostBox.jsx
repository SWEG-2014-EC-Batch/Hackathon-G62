import React, { useState } from 'react'
import { Modal } from 'antd';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

export default function IdeaBox({person}) {
    const[liked, setLiked] = useState(false);
   function toggleFav(){
    setLiked( (prev) => !prev);
   }

   const [open, setOpen] = useState(false);
   const showModal = () => {
     setOpen(true);
   };
   function handleComment(event) {
    event.preventDefault();
    console.log("You clicked the button");
    setComment(event.target.value)
    console.log("com", comment);
    setOpen(false);
   };
   const handleCancel = () => {
     console.log('Clicked cancel button');
     setOpen(false);
   };
   const [comment,setComment] = useState('');
  function change(event){
    setComment(event.target.value)
   }
  return (
    <div className="flex flex-col m-5 md:shrink-0 pt-2.5 bg-white rounded w-[280px] md:w-[450px] sm:w-[400px] lg:w-[850px] overflow-x-hidden">
        <div className='flex items-center gap-2'>
            <div className="avatar mx-2 mb-2">
                <div className="w-12 rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>
            <div className='flex flex-col gap-0'>
                <div className='text-black text-center font-semibold' style={{fontFamily :"Adamina"}}>
                    {person.name}
                </div>
                <div className='text-xs text-gray-500' style={{fontFamily :"Adamina"}}>
                    position
                </div>
            </div>
        </div>
        <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
        <div className="p-5" style={{fontFamily :"Adamina"}}>{person.description}</div>
        {person.image != null ? (
   <div className='border border-solid border-zinc-100'>
   <img src={person.image} alt="" className='h-[350px] rounded object-cover w-full m-auto' />
 </div>
) : (
  " "
)}
      <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
        <div className=' flex gap-16 m-5'>
        {liked ? <FavoriteOutlinedIcon sx={{ color: 'red' }} onClick ={toggleFav} /> : <FavoriteBorderOutlinedIcon onClick ={toggleFav} />}
    <TextsmsOutlinedIcon onClick={ showModal} />
    
     <Modal
        title="Comment"
        style={{display: 'flex', alignItems: 'center' ,width: '100%'}}
        open={open}
        onOk={handleComment}
        onCancel={handleCancel}
      >
 <textarea type='text' className="py-4 w-[250px] md:w-[500px] border rounded resize-none bg-slate-100 p-2 " 
                rows="2"
                placeholder='comment...'
                value={comment}
                onChange ={change}/>       </Modal>
        </div>
    </div>
    
  )
}
