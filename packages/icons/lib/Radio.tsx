/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="RadioIcon/Fill/radio"><path id="RadioMask" fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11.0002C3.5 9.05921 4.438 7.20021 6.144 5.76621C6.566 5.40921 6.621 4.77821 6.266 4.35621C5.909 3.93421 5.279 3.87921 4.856 4.23421C2.692 6.05621 1.5 8.45921 1.5 11.0002C1.5 13.5412 2.692 15.9442 4.856 17.7662C5.044 17.9232 5.272 18.0002 5.499 18.0002C5.784 18.0002 6.067 17.8792 6.266 17.6442C6.621 17.2222 6.566 16.5912 6.144 16.2342C4.438 14.8002 3.5 12.9412 3.5 11.0002ZM12 8.00021C10.346 8.00021 9 9.34621 9 11.0002C9 12.3142 9.855 13.4222 11.035 13.8262C11.0311 13.8472 11.0255 13.8674 11.02 13.8876L11.02 13.8876L11.02 13.8876L11.02 13.8877C11.0099 13.9241 11 13.9603 11 14.0002V20.0002C11 20.5532 11.447 21.0002 12 21.0002C12.553 21.0002 13 20.5532 13 20.0002V14.0002C13 13.9603 12.9901 13.9241 12.98 13.8877L12.98 13.8876L12.98 13.8876L12.98 13.8876C12.9745 13.8674 12.9689 13.8472 12.965 13.8262C14.145 13.4222 15 12.3142 15 11.0002C15 9.34621 13.654 8.00021 12 8.00021ZM15.2356 6.35661C15.5896 5.93461 16.2206 5.87861 16.6436 6.23561C18.1636 7.51361 18.9996 9.20661 18.9996 11.0006C18.9996 12.7946 18.1636 14.4866 16.6436 15.7646C16.4566 15.9236 16.2276 16.0006 16.0006 16.0006C15.7156 16.0006 15.4326 15.8796 15.2356 15.6436C14.8786 15.2216 14.9336 14.5906 15.3566 14.2356C16.4156 13.3426 16.9996 12.1936 16.9996 11.0006C16.9996 9.80661 16.4156 8.65761 15.3566 7.76461C14.9336 7.40961 14.8786 6.77861 15.2356 6.35661ZM8.7646 6.35671C8.4106 5.93371 7.7806 5.87771 7.3566 6.23571C5.8366 7.51371 4.9996 9.20671 4.9996 11.0007C4.9996 12.7937 5.8366 14.4867 7.3566 15.7647C7.5436 15.9227 7.7726 16.0007 7.9986 16.0007C8.2846 16.0007 8.5676 15.8787 8.7646 15.6437C9.1206 15.2217 9.0666 14.5907 8.6436 14.2357C7.5836 13.3427 6.9996 12.1937 6.9996 11.0007C6.9996 9.80671 7.5836 8.65771 8.6436 7.76471C9.0666 7.40971 9.1206 6.77871 8.7646 6.35671ZM17.7346 4.35661C18.0906 3.93461 18.7196 3.88061 19.1436 4.23461C21.3076 6.05561 22.4996 8.45961 22.4996 11.0006C22.4996 13.5416 21.3076 15.9446 19.1436 17.7656C18.9566 17.9226 18.7276 18.0006 18.5006 18.0006C18.2156 18.0006 17.9326 17.8796 17.7346 17.6436C17.3786 17.2216 17.4336 16.5906 17.8566 16.2346C19.5616 14.7996 20.4996 12.9416 20.4996 11.0006C20.4996 9.05861 19.5616 7.20061 17.8566 5.76561C17.4336 5.40961 17.3786 4.77861 17.7346 4.35661Z"/><mask id="Radiomask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="18"><path id="RadioMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11.0002C3.5 9.05921 4.438 7.20021 6.144 5.76621C6.566 5.40921 6.621 4.77821 6.266 4.35621C5.909 3.93421 5.279 3.87921 4.856 4.23421C2.692 6.05621 1.5 8.45921 1.5 11.0002C1.5 13.5412 2.692 15.9442 4.856 17.7662C5.044 17.9232 5.272 18.0002 5.499 18.0002C5.784 18.0002 6.067 17.8792 6.266 17.6442C6.621 17.2222 6.566 16.5912 6.144 16.2342C4.438 14.8002 3.5 12.9412 3.5 11.0002ZM12 8.00021C10.346 8.00021 9 9.34621 9 11.0002C9 12.3142 9.855 13.4222 11.035 13.8262C11.0311 13.8472 11.0255 13.8674 11.02 13.8876L11.02 13.8876L11.02 13.8876L11.02 13.8877C11.0099 13.9241 11 13.9603 11 14.0002V20.0002C11 20.5532 11.447 21.0002 12 21.0002C12.553 21.0002 13 20.5532 13 20.0002V14.0002C13 13.9603 12.9901 13.9241 12.98 13.8877L12.98 13.8876L12.98 13.8876L12.98 13.8876C12.9745 13.8674 12.9689 13.8472 12.965 13.8262C14.145 13.4222 15 12.3142 15 11.0002C15 9.34621 13.654 8.00021 12 8.00021ZM15.2356 6.35661C15.5896 5.93461 16.2206 5.87861 16.6436 6.23561C18.1636 7.51361 18.9996 9.20661 18.9996 11.0006C18.9996 12.7946 18.1636 14.4866 16.6436 15.7646C16.4566 15.9236 16.2276 16.0006 16.0006 16.0006C15.7156 16.0006 15.4326 15.8796 15.2356 15.6436C14.8786 15.2216 14.9336 14.5906 15.3566 14.2356C16.4156 13.3426 16.9996 12.1936 16.9996 11.0006C16.9996 9.80661 16.4156 8.65761 15.3566 7.76461C14.9336 7.40961 14.8786 6.77861 15.2356 6.35661ZM8.7646 6.35671C8.4106 5.93371 7.7806 5.87771 7.3566 6.23571C5.8366 7.51371 4.9996 9.20671 4.9996 11.0007C4.9996 12.7937 5.8366 14.4867 7.3566 15.7647C7.5436 15.9227 7.7726 16.0007 7.9986 16.0007C8.2846 16.0007 8.5676 15.8787 8.7646 15.6437C9.1206 15.2217 9.0666 14.5907 8.6436 14.2357C7.5836 13.3427 6.9996 12.1937 6.9996 11.0007C6.9996 9.80671 7.5836 8.65771 8.6436 7.76471C9.0666 7.40971 9.1206 6.77871 8.7646 6.35671ZM17.7346 4.35661C18.0906 3.93461 18.7196 3.88061 19.1436 4.23461C21.3076 6.05561 22.4996 8.45961 22.4996 11.0006C22.4996 13.5416 21.3076 15.9446 19.1436 17.7656C18.9566 17.9226 18.7276 18.0006 18.5006 18.0006C18.2156 18.0006 17.9326 17.8796 17.7346 17.6436C17.3786 17.2216 17.4336 16.5906 17.8566 16.2346C19.5616 14.7996 20.4996 12.9416 20.4996 11.0006C20.4996 9.05861 19.5616 7.20061 17.8566 5.76561C17.4336 5.40961 17.3786 4.77861 17.7346 4.35661Z"/></mask><g mask="url(#Radiomask0)"><g id="Radio&#Radio240;&#Radio159;&#Radio142;&#Radio168; Color"><rect id="RadioBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Radio-oIcon/Outline/radio"><path id="Radio-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11C3.5 9.05899 4.438 7.19999 6.144 5.76599C6.566 5.40899 6.621 4.77799 6.266 4.35599C5.909 3.93399 5.279 3.87899 4.856 4.23399C2.692 6.05599 1.5 8.45899 1.5 11C1.5 13.541 2.692 15.944 4.856 17.766C5.044 17.923 5.272 18 5.499 18C5.784 18 6.067 17.879 6.266 17.644C6.621 17.222 6.566 16.591 6.144 16.234C4.438 14.8 3.5 12.941 3.5 11ZM12 12C11.448 12 11 11.552 11 11C11 10.448 11.448 9.99999 12 9.99999C12.552 9.99999 13 10.448 13 11C13 11.552 12.552 12 12 12ZM12 7.99999C10.346 7.99999 9 9.34599 9 11C9 12.314 9.855 13.422 11.035 13.826C11.0311 13.847 11.0255 13.8672 11.02 13.8874L11.02 13.8874L11.02 13.8874L11.02 13.8874C11.0099 13.9239 11 13.9601 11 14V20C11 20.553 11.447 21 12 21C12.553 21 13 20.553 13 20V14C13 13.9601 12.9901 13.9239 12.98 13.8874L12.98 13.8874L12.98 13.8874L12.98 13.8874C12.9745 13.8672 12.9689 13.847 12.965 13.826C14.145 13.422 15 12.314 15 11C15 9.34599 13.654 7.99999 12 7.99999ZM15.2356 6.35639C15.5896 5.93439 16.2206 5.87839 16.6436 6.23539C18.1636 7.51339 18.9996 9.20639 18.9996 11.0004C18.9996 12.7944 18.1636 14.4864 16.6436 15.7644C16.4566 15.9234 16.2276 16.0004 16.0006 16.0004C15.7156 16.0004 15.4326 15.8794 15.2356 15.6434C14.8786 15.2214 14.9336 14.5904 15.3566 14.2354C16.4156 13.3424 16.9996 12.1934 16.9996 11.0004C16.9996 9.80639 16.4156 8.65739 15.3566 7.76439C14.9336 7.40939 14.8786 6.77839 15.2356 6.35639ZM8.7646 6.35639C8.4106 5.93339 7.7806 5.87739 7.3566 6.23539C5.8366 7.51339 4.9996 9.20639 4.9996 11.0004C4.9996 12.7934 5.8366 14.4864 7.3566 15.7644C7.5436 15.9224 7.7726 16.0004 7.9986 16.0004C8.2846 16.0004 8.5676 15.8784 8.7646 15.6434C9.1206 15.2214 9.0666 14.5904 8.6436 14.2354C7.5836 13.3424 6.9996 12.1934 6.9996 11.0004C6.9996 9.80639 7.5836 8.65739 8.6436 7.76439C9.0666 7.40939 9.1206 6.77839 8.7646 6.35639ZM17.7346 4.35639C18.0906 3.93439 18.7196 3.88039 19.1436 4.23439C21.3076 6.05539 22.4996 8.45939 22.4996 11.0004C22.4996 13.5414 21.3076 15.9444 19.1436 17.7654C18.9566 17.9224 18.7276 18.0004 18.5006 18.0004C18.2156 18.0004 17.9326 17.8794 17.7346 17.6434C17.3786 17.2214 17.4336 16.5904 17.8566 16.2344C19.5616 14.7994 20.4996 12.9414 20.4996 11.0004C20.4996 9.05839 19.5616 7.20039 17.8566 5.76539C17.4336 5.40939 17.3786 4.77839 17.7346 4.35639Z"/><mask id="Radio-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="3" width="22" height="18"><path id="Radio-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11C3.5 9.05899 4.438 7.19999 6.144 5.76599C6.566 5.40899 6.621 4.77799 6.266 4.35599C5.909 3.93399 5.279 3.87899 4.856 4.23399C2.692 6.05599 1.5 8.45899 1.5 11C1.5 13.541 2.692 15.944 4.856 17.766C5.044 17.923 5.272 18 5.499 18C5.784 18 6.067 17.879 6.266 17.644C6.621 17.222 6.566 16.591 6.144 16.234C4.438 14.8 3.5 12.941 3.5 11ZM12 12C11.448 12 11 11.552 11 11C11 10.448 11.448 9.99999 12 9.99999C12.552 9.99999 13 10.448 13 11C13 11.552 12.552 12 12 12ZM12 7.99999C10.346 7.99999 9 9.34599 9 11C9 12.314 9.855 13.422 11.035 13.826C11.0311 13.847 11.0255 13.8672 11.02 13.8874L11.02 13.8874L11.02 13.8874L11.02 13.8874C11.0099 13.9239 11 13.9601 11 14V20C11 20.553 11.447 21 12 21C12.553 21 13 20.553 13 20V14C13 13.9601 12.9901 13.9239 12.98 13.8874L12.98 13.8874L12.98 13.8874L12.98 13.8874C12.9745 13.8672 12.9689 13.847 12.965 13.826C14.145 13.422 15 12.314 15 11C15 9.34599 13.654 7.99999 12 7.99999ZM15.2356 6.35639C15.5896 5.93439 16.2206 5.87839 16.6436 6.23539C18.1636 7.51339 18.9996 9.20639 18.9996 11.0004C18.9996 12.7944 18.1636 14.4864 16.6436 15.7644C16.4566 15.9234 16.2276 16.0004 16.0006 16.0004C15.7156 16.0004 15.4326 15.8794 15.2356 15.6434C14.8786 15.2214 14.9336 14.5904 15.3566 14.2354C16.4156 13.3424 16.9996 12.1934 16.9996 11.0004C16.9996 9.80639 16.4156 8.65739 15.3566 7.76439C14.9336 7.40939 14.8786 6.77839 15.2356 6.35639ZM8.7646 6.35639C8.4106 5.93339 7.7806 5.87739 7.3566 6.23539C5.8366 7.51339 4.9996 9.20639 4.9996 11.0004C4.9996 12.7934 5.8366 14.4864 7.3566 15.7644C7.5436 15.9224 7.7726 16.0004 7.9986 16.0004C8.2846 16.0004 8.5676 15.8784 8.7646 15.6434C9.1206 15.2214 9.0666 14.5904 8.6436 14.2354C7.5836 13.3424 6.9996 12.1934 6.9996 11.0004C6.9996 9.80639 7.5836 8.65739 8.6436 7.76439C9.0666 7.40939 9.1206 6.77839 8.7646 6.35639ZM17.7346 4.35639C18.0906 3.93439 18.7196 3.88039 19.1436 4.23439C21.3076 6.05539 22.4996 8.45939 22.4996 11.0004C22.4996 13.5414 21.3076 15.9444 19.1436 17.7654C18.9566 17.9224 18.7276 18.0004 18.5006 18.0004C18.2156 18.0004 17.9326 17.8794 17.7346 17.6434C17.3786 17.2214 17.4336 16.5904 17.8566 16.2344C19.5616 14.7994 20.4996 12.9414 20.4996 11.0004C20.4996 9.05839 19.5616 7.20039 17.8566 5.76539C17.4336 5.40939 17.3786 4.77839 17.7346 4.35639Z"/></mask><g mask="url(#Radio-omask0)"><g id="Radio-o&#Radio-o240;&#Radio-o159;&#Radio-o142;&#Radio-o168; Color"><rect id="Radio-oBase" width="24" height="24"/></g></g></g></g>,
    })
))