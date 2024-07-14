

const PopularCategoryCard = ({categoryy}) => {
    const {category,img} = categoryy
    return (
        <div className="cursor-pointer flex hover:p-7 transition-all duration-25 p-5 flex-col justify-center items-center">
           <div className="relative opacity-75">
           <img className="rounded-lg w-48 h-48" src={img} alt="" />
           </div>
            <div className="absolute top-0">
            <h1 className="text-xl bg-cyan-300 rounded-lg p-1">{category}</h1>
            </div>
        </div>
    );
};

export default PopularCategoryCard;