'use client'
import {useEffect, useState} from "react";
import VConsole from "vconsole";


export default function Home() {
    const [value, setValue] = useState('')

    useEffect(() => {
        const vConsole = new VConsole()
        const isServer = typeof window === 'undefined'
        const userAgent = navigator.userAgent;
        if (!isServer && userAgent){
            // 判断浏览器类型和版本
            if (userAgent.indexOf("Chrome") != -1) {
                // Chrome
                // @ts-ignore
                const chromeVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
                console.log("Chrome 版本：" + chromeVersion);
                setValue("Chrome 版本：" + chromeVersion)
            } else if (userAgent.indexOf("Firefox") != -1) {
                // Firefox
                // @ts-ignore
                const firefoxVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
                console.log("Firefox 版本：" + firefoxVersion);
                setValue("Firefox 版本：" + firefoxVersion)
            } else if (userAgent.indexOf("Safari") != -1) {
                // Safari
                // @ts-ignore
                const safariVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
                console.log("Safari 版本：" + safariVersion);
                setValue("Safari 版本：" + safariVersion)
            } else if (userAgent.indexOf("MSIE") != -1 || userAgent.indexOf("Trident") != -1) {
                // Internet Explorer
                // @ts-ignore
                const ieVersion = userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+\.\d+)/)[1];
                console.log("IE 版本：" + ieVersion);
                setValue("IE 版本：" + ieVersion)
            } else if (userAgent.indexOf("Edge") != -1) {
                // Microsoft Edge
                // @ts-ignore
                const edgeVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
                console.log("Edge 版本：" + edgeVersion);
                setValue("Edge 版本：" + edgeVersion)
            } else {
                // 其他浏览器
                console.log("无法识别的浏览器");
                setValue("无法识别的浏览器")
            }
        }

        return () =>{
            vConsole.destroy()
        }
    })

  return (
    <main>
      <div style={{width:'100vw',height:'100vh',overflow:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
        你的浏览器版本是：{value}
      </div>
    </main>
  )
}
