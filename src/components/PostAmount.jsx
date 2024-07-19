function PostAmounts({postAmount,setPostAmount}) { 

    const handleChange = (e) => {
        setPostAmount(e.target.value)
        
        };

    return(
    <div>
        <p>Desired Amount of Posts:</p>
    <div className="gap-x-6 flex flex-row items-center">
        <div className="flex items-center ps-4 w-1/4 border-2 bg-light-grey border-dark-brown rounded-md">
            <input onClick={handleChange} id="p1" type="radio" value="1 " name="postAmount" className="accent-bold-pink w-4 h-4 focus:ring-bold-pink focus:ring-2"/>
            <label htmlFor="p1" className="w-full py-4 ms-2">1 Post</label>
        </div>
        <div className="flex items-center ps-4 w-1/4 border-2 bg-light-grey border-dark-brown rounded-md">
            <input onClick={handleChange} id="p2" type="radio" value="2 " name="postAmount" className="accent-bold-pink w-4 h-4 focus:ring-bold-pink focus:ring-2"/>
            <label htmlFor="p2" className="w-full py-4 ms-2">2 Posts</label>
        </div>
        <div className="flex items-center ps-4 w-1/4 border-2 bg-light-grey border-dark-brown rounded-md">
            <input onClick={handleChange} id="p3" type="radio" value="3 " name="postAmount" className="accent-bold-pink w-4 h-4 focus:ring-bold-pink focus:ring-2"/>
            <label htmlFor="p3" className="w-full py-4 ms-2">3 Posts</label>
        </div>  
    </div>
    </div>
    );
};

export default PostAmounts;