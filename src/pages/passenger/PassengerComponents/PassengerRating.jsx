import React, {useState} from 'react'

const PassengerRating = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [inputText, setInputText] = useState('');

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleRatingHover = (hoveredStar) => {
    setHoveredRating(hoveredStar);
  };

  const handleRatingHoverEnd = () => {
    setHoveredRating(0);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
  };

  const characterCount = inputText.length;
  const maxCharacterCount = 500;
  const remainingCharacters = maxCharacterCount - characterCount;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Submitted rating:', rating);
  };

  return (
    <div className='bg-white py-6 px-3 md:px-8 xl:px-[358px] flex justify-center'>
        <div className="bg-[#F1F1F1] py-4 lg:py-10 px-4 md:px-14 lg:px-16 xl:px-20 rounded-2xl shadow-rating w-5/6 lg:w-3/4 xl:w-[700px]">
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-1 md:gap-[6px] lg:gap-3 font-inter">
                <h3 className='text-[#303030] font-medium text-lg md:text-2xl lg:text-3xl xl:text-[32px] text-center'>Leave a review to our service!</h3>
                <div className="flex gap-3 items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        onMouseEnter={() => handleRatingHover(star)}
                        onMouseLeave={handleRatingHoverEnd}
                        className={`text-4xl md:text-5xl lg:text-6xl ${
                        rating >= star || hoveredRating >= star
                            ? 'text-yellow-500'
                            : 'text-gray-400'
                        }`}
                    >
                        {rating >= star || hoveredRating >= star ? (
                        <span>&#9733;</span>
                        ) : (
                        <span>&#9734;</span>
                        )}
                    </button>
                    ))}
                </div>
                <h4 className='text-[#4D4D4D] font-normal text-lg md:text-xl lg:text-2xl'>Rate your experience</h4>
                <input
                    type="text"
                    placeholder="Describe your experience (Optional)"
                    value={inputText}
                    onChange={handleInputChange}
                    maxLength={maxCharacterCount}
                    className="w-5/6 lg:w-full text-sm md:text-base lg:text-xl px-2 lg:px-4 py-3 md:py-5 lg:py-7 border border-black rounded-2xl "
                />
                <div className="text-xs lg:text-sm self-end text-gray-500">
                    {characterCount}/{maxCharacterCount}
                </div>
                
                <button
                    type="submit"
                    className="border outline-none px-4 py-2 lg:py-[10px] bg-primary/90 text-white font-semibold text-base md:text-lg lg:text-xl rounded-2xl hover:bg-primary w-2/3"
                >
                    Submit
                </button>
            </div>
        </form>
        </div>
    </div>
  );
};

  

export default PassengerRating