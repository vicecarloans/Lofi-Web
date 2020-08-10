import * as React from "react";

function SvgAlbum(props) {
  return (
    <svg
      width={24}
      height={24}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 24 24" 
      {...props}
    >
      <path d="M12 21H0v-2h12v2zm4-9l8-1v6.681C23.998 19.236 22.82 20 21.743 20 20.836 20 20 19.458 20 18.39c0-.96.903-1.852 2-2.073V14l-4 .5v4.181C17.998 20.236 16.82 21 15.743 21 14.836 21 14 20.458 14 19.39c0-.96.903-1.852 2-2.073V12zm-4 4.976H0v-2h12v2zM12 13H0v-2h12v2zm12-4H0V7h24v2zm0-4H0V3h24v2z" />
    </svg>
  );
}

export default SvgAlbum;
