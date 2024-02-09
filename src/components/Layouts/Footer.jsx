// ./src/components/Layouts/Footer.jsx

import React, { useState } from 'react'

function Footer(props) {
    const { setPopUp } = props;

    return (
        <div className='-mt-32 md:-mt-56 lg:-mt-96'>
            <svg id="visual" className='w-fit h-fit -mb-4' viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                <path d="M0 346L21.5 356.5C43 367 86 388 128.8 401C171.7 414 214.3 419 257.2 419.3C300 419.7 343 415.3 385.8 407.2C428.7 399 471.3 387 514.2 377C557 367 600 359 642.8 375.7C685.7 392.3 728.3 433.7 771.2 436.8C814 440 857 405 878.5 387.5L900 370L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#383533"></path>
                <path d="M0 479L21.5 475.5C43 472 86 465 128.8 454.7C171.7 444.3 214.3 430.7 257.2 433.7C300 436.7 343 456.3 385.8 469.2C428.7 482 471.3 488 514.2 478.8C557 469.7 600 445.3 642.8 442.5C685.7 439.7 728.3 458.3 771.2 474.7C814 491 857 505 878.5 512L900 519L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#2a2725"></path>
                <path d="M0 496L21.5 497.3C43 498.7 86 501.3 128.8 505.3C171.7 509.3 214.3 514.7 257.2 510.8C300 507 343 494 385.8 500.7C428.7 507.3 471.3 533.7 514.2 540.8C557 548 600 536 642.8 526.2C685.7 516.3 728.3 508.7 771.2 511C814 513.3 857 525.7 878.5 531.8L900 538L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#1c1917">
                </path>
            </svg>
            <div className='w-full h-[250px] lg:h-[350px] bg-dark'>
                <div>
                    <h1 className='font-josefin font-bold text-5xl lg:text-9xl text-center mb-2 text-bright'>NaturalEarth</h1>
                    <p className='font-montserrat text-2xl lg:text-3xl text-center text-bright'>Created by <span className='text-bright font-semibold'>dimasbajuri</span></p>
                </div>

                <div className='flex flex-col items-center justify-center gap-y-5 py-10'>
                    <div className='flex items-center gap-x-4'>
                        <a target='_blank' href="https://www.instagram.com/dimasbajuri?igsh=MTJnMzBwZGU5OWNuaA==">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill='#f8fafc' className='w-8 h-8 hover:-mt-3 transition-all duration-300 cursor-pointer' viewBox="0 0 56.7 56.7" enable-background="new 0 0 56.7 56.7" xml:space="preserve">
                                <g>
                                    <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
                                    <circle cx="41.5" cy="16.4" r="2.9" />
                                    <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
                                </g>
                            </svg>
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/dimas-bajuri-019453260/">
                            <svg fill='#f8fafc' className='w-8 h-8 hover:-mt-3 transition-all duration-300 cursor-pointer' enable-background="new 0 0 56.693 56.693" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                                    <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                                </g>
                            </svg>
                        </a>
                        <a target='_blank' href="https://x.com/dddimasriz?t=hO-9y-8tqEZuT1j2N5AUbw&s=09">
                            <svg fill='#f8fafc' className='w-8 h-8 hover:-mt-3 transition-all duration-300 cursor-pointer' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 24 24' }} xml:space="preserve">
                                <g><polygon points="12.153992,10.729553 8.088684,5.041199 5.92041,5.041199 10.956299,12.087097 11.59021,12.97345    15.900635,19.009583 18.068909,19.009583 12.785217,11.615906  " /><path d="M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958   C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013   L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z" /></g></svg>
                        </a>
                        <a target='_blank' href="https://github.com/dimasbajuri">
                            <svg fill='#f8fafc' className='w-8 h-8 hover:-mt-3 transition-all duration-300 cursor-pointer' enable-background="new -1163 1657.697 56.693 56.693" id="Layer_1" version="1.1" viewBox="-1163 1657.697 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M-1134.6598,1662.9163c-13.601,0-24.63,11.0267-24.63,24.6299   c0,10.8821,7.0573,20.1144,16.8435,23.3713c1.2308,0.2279,1.6829-0.5345,1.6829-1.1849c0-0.587-0.0227-2.5276-0.0334-4.5857   c-6.8521,1.4901-8.2979-2.906-8.2979-2.906c-1.1205-2.8467-2.7347-3.6039-2.7347-3.6039   c-2.2349-1.5287,0.1685-1.4972,0.1685-1.4972c2.473,0.1737,3.7755,2.5385,3.7755,2.5385c2.1967,3.7651,5.7618,2.6765,7.1675,2.0472   c0.2211-1.5917,0.8591-2.6786,1.5637-3.2936c-5.4707-0.6226-11.2218-2.7347-11.2218-12.1722c0-2.6888,0.9623-4.8861,2.538-6.611   c-0.2557-0.6206-1.0989-3.1255,0.2386-6.5183c0,0,2.0684-0.6616,6.7747,2.525c1.9648-0.5458,4.0719-0.8195,6.165-0.829   c2.093,0.0095,4.2017,0.2832,6.17,0.829c4.7012-3.1866,6.7665-2.525,6.7665-2.525c1.3406,3.3928,0.4974,5.8977,0.2417,6.5183   c1.5793,1.7249,2.5348,3.9221,2.5348,6.611c0,9.4602-5.7618,11.5428-11.2465,12.1527c0.8834,0.7644,1.6704,2.2632,1.6704,4.561   c0,3.2955-0.0282,5.9479-0.0282,6.7592c0,0.6556,0.4432,1.4236,1.6915,1.1818c9.7812-3.2605,16.8296-12.4896,16.8296-23.3682   C-1110.0299,1673.943-1121.0574,1662.9163-1134.6598,1662.9163z" fill-rule="evenodd" /><path d="M-1149.9611,1698.2793c-0.0542,0.1227-0.2469,0.1593-0.4222,0.0753c-0.1788-0.0804-0.2788-0.2473-0.2211-0.37   c0.053-0.126,0.2457-0.161,0.4242-0.0769C-1150.0013,1697.9882-1149.8993,1698.1566-1149.9611,1698.2793L-1149.9611,1698.2793z    M-1150.2642,1698.0547" /><path d="M-1148.9634,1699.3922c-0.1174,0.1086-0.3473,0.0581-0.5031-0.1139c-0.1613-0.1718-0.1912-0.4016-0.072-0.5118   c0.1211-0.1088,0.3438-0.0579,0.505,0.1139C-1148.8721,1699.0541-1148.8407,1699.2819-1148.9634,1699.3922L-1148.9634,1699.3922z    M-1149.1984,1699.14" /><path d="M-1147.9922,1700.8105c-0.151,0.1051-0.3979,0.0067-0.5505-0.2123c-0.151-0.2191-0.151-0.4819,0.0035-0.5872   c0.1526-0.1051,0.396-0.0104,0.5505,0.2068C-1147.8381,1700.4406-1147.8381,1700.7034-1147.9922,1700.8105L-1147.9922,1700.8105z    M-1147.9922,1700.8105" /><path d="M-1146.6619,1702.1812c-0.1351,0.1489-0.4227,0.1086-0.6329-0.0945c-0.2155-0.1984-0.2753-0.4803-0.1403-0.6293   c0.1371-0.149,0.4263-0.1072,0.6381,0.0944C-1146.5831,1701.7501-1146.5182,1702.0337-1146.6619,1702.1812L-1146.6619,1702.1812z    M-1146.6619,1702.1812" /><path d="M-1144.8265,1702.9769c-0.0597,0.1927-0.3365,0.2804-0.6154,0.1984c-0.2788-0.0845-0.4608-0.3103-0.4047-0.5051   c0.0577-0.1943,0.3361-0.2855,0.6169-0.1979C-1144.9512,1702.5563-1144.7688,1702.7805-1144.8265,1702.9769L-1144.8265,1702.9769z    M-1144.8265,1702.9769" /><path d="M-1142.8107,1703.1243c0.0067,0.2031-0.2299,0.3716-0.5226,0.3752c-0.2944,0.0067-0.533-0.1577-0.5361-0.3577   c0-0.2052,0.2313-0.3717,0.5258-0.3768C-1143.0509,1702.7594-1142.8107,1702.9227-1142.8107,1703.1243L-1142.8107,1703.1243z    M-1142.8107,1703.1243" /><path d="M-1140.9351,1702.8052c0.035,0.198-0.1686,0.4015-0.4594,0.4557c-0.2859,0.0526-0.5504-0.0701-0.587-0.2665   c-0.0354-0.2031,0.1716-0.4066,0.4573-0.4592C-1141.233,1702.4846-1140.9722,1702.6036-1140.9351,1702.8052L-1140.9351,1702.8052z    M-1140.9351,1702.8052" /></g></svg>
                        </a>
                    </div>
                    <button className='text-bright font-montserrat text-lg md:text-xl underline' onClick={() => setPopUp(true)}>Images Credit</button>
                </div>
            </div>
        </div>

    )
}

export default Footer