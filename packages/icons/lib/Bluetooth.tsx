/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="BluetoothIcon/Fill/bluetooth"><path id="BluetoothMask" fillRule="evenodd" clipRule="evenodd" d="M13 18.2495V14.1785L15.467 16.5575L13 18.2495ZM13 5.76048L15.497 7.49348L13 9.85048V5.76048ZM13.629 12.0065L17.644 8.21648C17.895 7.97848 18.023 7.64648 17.997 7.30448C17.97 6.96148 17.792 6.65148 17.507 6.45448L12.833 3.21048C12.474 2.95848 12.008 2.93048 11.618 3.13348C11.237 3.33248 11 3.72048 11 4.14548V10.3515L7.80702 6.37448C7.46002 5.94248 6.83202 5.87448 6.40102 6.22048C5.97002 6.56548 5.90102 7.19548 6.24702 7.62548L9.72102 11.9525L6.21602 16.3795C5.87302 16.8125 5.94602 17.4405 6.37902 17.7845C6.56302 17.9295 6.78202 17.9995 7.00002 17.9995C7.29402 17.9995 7.58602 17.8705 7.78402 17.6205L11 13.5595V19.8535C11 20.2775 11.235 20.6645 11.613 20.8645C11.787 20.9555 11.975 21.0005 12.163 21.0005C12.395 21.0005 12.626 20.9315 12.827 20.7945L17.469 17.6085C17.754 17.4125 17.934 17.1035 17.961 16.7615C17.989 16.4205 17.863 16.0885 17.616 15.8515L13.629 12.0065Z"/><mask id="Bluetoothmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="2" width="14" height="20"><path id="BluetoothMask_2" fillRule="evenodd" clipRule="evenodd" d="M13 18.2495V14.1785L15.467 16.5575L13 18.2495ZM13 5.76048L15.497 7.49348L13 9.85048V5.76048ZM13.629 12.0065L17.644 8.21648C17.895 7.97848 18.023 7.64648 17.997 7.30448C17.97 6.96148 17.792 6.65148 17.507 6.45448L12.833 3.21048C12.474 2.95848 12.008 2.93048 11.618 3.13348C11.237 3.33248 11 3.72048 11 4.14548V10.3515L7.80702 6.37448C7.46002 5.94248 6.83202 5.87448 6.40102 6.22048C5.97002 6.56548 5.90102 7.19548 6.24702 7.62548L9.72102 11.9525L6.21602 16.3795C5.87302 16.8125 5.94602 17.4405 6.37902 17.7845C6.56302 17.9295 6.78202 17.9995 7.00002 17.9995C7.29402 17.9995 7.58602 17.8705 7.78402 17.6205L11 13.5595V19.8535C11 20.2775 11.235 20.6645 11.613 20.8645C11.787 20.9555 11.975 21.0005 12.163 21.0005C12.395 21.0005 12.626 20.9315 12.827 20.7945L17.469 17.6085C17.754 17.4125 17.934 17.1035 17.961 16.7615C17.989 16.4205 17.863 16.0885 17.616 15.8515L13.629 12.0065Z"/></mask><g mask="url(#Bluetoothmask0)"><g id="Bluetooth&#Bluetooth240;&#Bluetooth159;&#Bluetooth142;&#Bluetooth168; Color"><rect id="BluetoothBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Bluetooth-oIcon/Outline/bluetooth"><path id="Bluetooth-oMask" fillRule="evenodd" clipRule="evenodd" d="M13 18.2495V14.1785L15.467 16.5575L13 18.2495ZM13 5.76048L15.497 7.49348L13 9.85048V5.76048ZM13.629 12.0065L17.644 8.21648C17.895 7.97848 18.023 7.64648 17.997 7.30448C17.97 6.96148 17.792 6.65148 17.507 6.45448L12.833 3.21048C12.474 2.95848 12.008 2.93048 11.618 3.13348C11.237 3.33248 11 3.72048 11 4.14548V10.3515L7.807 6.37448C7.46 5.94248 6.832 5.87448 6.401 6.22048C5.97 6.56548 5.901 7.19548 6.247 7.62548L9.721 11.9525L6.216 16.3795C5.873 16.8125 5.946 17.4405 6.379 17.7845C6.563 17.9295 6.782 17.9995 7 17.9995C7.294 17.9995 7.586 17.8705 7.784 17.6205L11 13.5595V19.8535C11 20.2775 11.235 20.6645 11.613 20.8645C11.787 20.9555 11.975 21.0005 12.163 21.0005C12.395 21.0005 12.626 20.9315 12.827 20.7945L17.469 17.6085C17.754 17.4125 17.934 17.1035 17.961 16.7615C17.989 16.4205 17.863 16.0885 17.616 15.8515L13.629 12.0065Z"/><mask id="Bluetooth-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="2" width="14" height="20"><path id="Bluetooth-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M13 18.2495V14.1785L15.467 16.5575L13 18.2495ZM13 5.76048L15.497 7.49348L13 9.85048V5.76048ZM13.629 12.0065L17.644 8.21648C17.895 7.97848 18.023 7.64648 17.997 7.30448C17.97 6.96148 17.792 6.65148 17.507 6.45448L12.833 3.21048C12.474 2.95848 12.008 2.93048 11.618 3.13348C11.237 3.33248 11 3.72048 11 4.14548V10.3515L7.807 6.37448C7.46 5.94248 6.832 5.87448 6.401 6.22048C5.97 6.56548 5.901 7.19548 6.247 7.62548L9.721 11.9525L6.216 16.3795C5.873 16.8125 5.946 17.4405 6.379 17.7845C6.563 17.9295 6.782 17.9995 7 17.9995C7.294 17.9995 7.586 17.8705 7.784 17.6205L11 13.5595V19.8535C11 20.2775 11.235 20.6645 11.613 20.8645C11.787 20.9555 11.975 21.0005 12.163 21.0005C12.395 21.0005 12.626 20.9315 12.827 20.7945L17.469 17.6085C17.754 17.4125 17.934 17.1035 17.961 16.7615C17.989 16.4205 17.863 16.0885 17.616 15.8515L13.629 12.0065Z"/></mask><g mask="url(#Bluetooth-omask0)"><g id="Bluetooth-o&#Bluetooth-o240;&#Bluetooth-o159;&#Bluetooth-o142;&#Bluetooth-o168; Color"><rect id="Bluetooth-oBase" width="24" height="24"/></g></g></g></g>,
    })
))