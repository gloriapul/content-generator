
function Socials() {
    return (
    <div className="max-w-2xl flex flex-col items-center rounded-md shadow-md p-4 bg-white font-poppins ">
        <h1 className="max-w-xl text-2xl font-bold m-2 p-2">Time To Post</h1>
          <br/>
        <p>Head over to your preferred social media account below and share your Witty Wordsmith generated post!</p>

        <div className=" w-full h-auto py-8  justify-center gap-4 flex flex-wrap">
            <a target="_blank" href="https://www.facebook.com/">
            <button className="text-white w-16 h-16 shadow-md 
          rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 group relative inline-flex items-center justify-center overflow-hidden transition hover:scale-110">
            <svg className="transition-all duration-300 group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 72 72" fill="none">
                <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" fill="white"/>
            </svg>
            </button>
            </a>
            
            <a target="_blank" href="https://www.instagram.com/">
            <button className="text-white w-16 h-16 shadow-md 
          rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 group relative inline-flex items-center justify-center overflow-hidden transition hover:scale-110">
            <svg className="transition-all duration-300 group-hover:scale-110" width="45" height="45" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.4456 35.7808C27.4456 31.1786 31.1776 27.4468 35.7826 27.4468C40.3875 27.4468 44.1216 31.1786 44.1216 35.7808C44.1216 40.383 40.3875 44.1148 35.7826 44.1148C31.1776 44.1148 27.4456 40.383 27.4456 35.7808ZM22.9377 35.7808C22.9377 42.8708 28.6883 48.618 35.7826 48.618C42.8768 48.618 48.6275 42.8708 48.6275 35.7808C48.6275 28.6908 42.8768 22.9436 35.7826 22.9436C28.6883 22.9436 22.9377 28.6908 22.9377 35.7808ZM46.1342 22.4346C46.1339 23.0279 46.3098 23.608 46.6394 24.1015C46.9691 24.595 47.4377 24.9797 47.9861 25.2069C48.5346 25.4342 49.1381 25.4939 49.7204 25.3784C50.3028 25.2628 50.8378 24.9773 51.2577 24.5579C51.6777 24.1385 51.9638 23.6041 52.0799 23.0222C52.1959 22.4403 52.1367 21.8371 51.9097 21.2888C51.6828 20.7406 51.2982 20.2719 50.8047 19.942C50.3112 19.6122 49.7309 19.436 49.1372 19.4358H49.136C48.3402 19.4361 47.5771 19.7522 47.0142 20.3144C46.4514 20.8767 46.1349 21.6392 46.1342 22.4346ZM25.6765 56.1302C23.2377 56.0192 21.9121 55.6132 21.0311 55.2702C19.8632 54.8158 19.0299 54.2746 18.1538 53.4002C17.2777 52.5258 16.7354 51.6938 16.2827 50.5266C15.9393 49.6466 15.533 48.3214 15.4222 45.884C15.3009 43.2488 15.2767 42.4572 15.2767 35.781C15.2767 29.1048 15.3029 28.3154 15.4222 25.678C15.5332 23.2406 15.9425 21.918 16.2827 21.0354C16.7374 19.8682 17.2789 19.0354 18.1538 18.1598C19.0287 17.2842 19.8612 16.7422 21.0311 16.2898C21.9117 15.9466 23.2377 15.5406 25.6765 15.4298C28.3133 15.3086 29.1054 15.2844 35.7826 15.2844C42.4598 15.2844 43.2527 15.3106 45.8916 15.4298C48.3305 15.5408 49.6539 15.9498 50.537 16.2898C51.7049 16.7422 52.5382 17.2854 53.4144 18.1598C54.2905 19.0342 54.8308 19.8682 55.2855 21.0354C55.6289 21.9154 56.0351 23.2406 56.146 25.678C56.2673 28.3154 56.2915 29.1048 56.2915 35.781C56.2915 42.4572 56.2673 43.2466 56.146 45.884C56.0349 48.3214 55.6267 49.6462 55.2855 50.5266C54.8308 51.6938 54.2893 52.5266 53.4144 53.4002C52.5394 54.2738 51.7049 54.8158 50.537 55.2702C49.6565 55.6134 48.3305 56.0194 45.8916 56.1302C43.2549 56.2514 42.4628 56.2756 35.7826 56.2756C29.1024 56.2756 28.3125 56.2514 25.6765 56.1302ZM25.4694 10.9322C22.8064 11.0534 20.9867 11.4754 19.3976 12.0934C17.7518 12.7316 16.3585 13.5878 14.9663 14.977C13.5741 16.3662 12.7195 17.7608 12.081 19.4056C11.4626 20.9948 11.0403 22.8124 10.9191 25.4738C10.7958 28.1394 10.7676 28.9916 10.7676 35.7808C10.7676 42.57 10.7958 43.4222 10.9191 46.0878C11.0403 48.7494 11.4626 50.5668 12.081 52.156C12.7195 53.7998 13.5743 55.196 14.9663 56.5846C16.3583 57.9732 17.7518 58.8282 19.3976 59.4682C20.9897 60.0862 22.8064 60.5082 25.4694 60.6294C28.138 60.7506 28.9893 60.7808 35.7826 60.7808C42.5759 60.7808 43.4286 60.7526 46.0958 60.6294C48.759 60.5082 50.5774 60.0862 52.1676 59.4682C53.8124 58.8282 55.2066 57.9738 56.5989 56.5846C57.9911 55.1954 58.8438 53.7998 59.4842 52.156C60.1026 50.5668 60.5268 48.7492 60.6461 46.0878C60.7674 43.4202 60.7956 42.57 60.7956 35.7808C60.7956 28.9916 60.7674 28.1394 60.6461 25.4738C60.5248 22.8122 60.1026 20.9938 59.4842 19.4056C58.8438 17.7618 57.9889 16.3684 56.5989 14.977C55.2088 13.5856 53.8124 12.7316 52.1696 12.0934C50.5775 11.4754 48.7588 11.0514 46.0978 10.9322C43.4306 10.811 42.5779 10.7808 35.7846 10.7808C28.9913 10.7808 28.138 10.809 25.4694 10.9322Z" fill="white"/>
                </svg>
            </button>
            </a>

            <a target="_blank" href="https://x.com/">
            <button className="text-white w-16 h-16 shadow-md 
          rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 group relative inline-flex items-center justify-center overflow-hidden transition hover:scale-110">
            <svg className="transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 72 72" fill="none">
                <path d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z" fill="white"/>
            </svg>
            </button>
            </a>
            
            <a target="_blank" href="https://www.pinterest.com/">
            <button className="text-white w-16 h-16 shadow-md 
          rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 group relative inline-flex items-center justify-center overflow-hidden transition hover:scale-110">
            <svg className="transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 71 72" fill="none">
                <path d="M33.3501 13.0437C25.9186 13.893 18.5132 20.0479 18.2075 28.84C18.0154 34.2083 19.5044 38.2356 24.4951 39.3664C26.6608 35.4553 23.7965 34.5927 23.3511 31.7633C21.5216 20.1686 36.4153 12.2615 44.2093 20.3563C49.6018 25.9615 46.0519 43.206 37.3541 41.4136C29.0231 39.7017 41.4323 25.9749 34.7823 23.2796C29.3767 21.0894 26.5037 29.9798 29.0667 34.396C27.5647 41.9902 24.3292 49.1464 25.6391 58.6715C29.8876 55.5158 31.3198 49.4727 32.4943 43.1702C34.6295 44.4978 35.7691 45.8789 38.4937 46.0935C48.5407 46.8891 54.1515 35.8263 52.7805 25.6218C51.5623 16.5749 42.7422 11.971 33.3501 13.0437Z" fill="white"/>
            </svg>
            </button>
            </a>
        </div>
      </div>
);
};

export default Socials;