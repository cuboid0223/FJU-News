import React, { Component } from 'react'
import CardItem from './CardItem'

class Card extends Component {
    state = {
        carditems: [
            {   
                imgurl: "https://img.moegirl.org/common/5/5f/Slifer_the_Sky_Dragon.jpg",
                title: '奧西里斯之天空龍',
                txt:  '日文名	オシリスの天空竜' +
                      '英文名	Slifer the Sky Dragon'+
                      '卡片種類	效果怪獸' +
                      '卡片密碼	10000020'+
                      '使用限制	無限制'+
                      '種族	幻神獸'
            },
            {
                imgurl: "https://img.moegirl.org/common/0/0e/Obelisk_the_Tormentor.jpg",
                title: '欧贝利斯克之巨神兵',
                txt:'オベリスクの巨神兵'+
                    '英文名	Obelisk the Tormentor' +
                    '卡片种类	效果怪兽' +
                    '卡片密码	10000000' +
                    '用限制	无限制' +
                    '种族	幻神兽'
            },
            {
                imgurl: "https://img.moegirl.org/common/2/2b/The_Winged_Dragon_of_Ra_.jpg",
                title: '太陽神之翼神龍',
                txt:'ラーの翼神竜' +
                    '英文名	The Winged Dragon of Ra' +
                    '卡片种类	效果怪兽' +
                    '卡片密码	10000010' +
                    '用限制	无限制' +
                    '种族	幻神兽'
            },
           
        ]
    }

    render() {
        const carditems = this.state.carditems.map((c) => (
            <CardItem 
                imgurl={c.imgurl}
                title={c.title} 
                txt={c.txt} />
        ));

        return (
            <div>
                {carditems}
            </div>
        )
    }
}

export default Card
        
        // <div className="card2-container">
        //     <div className="item">
        //         <div className="pic">
        //           <img src={("https://img.moegirl.org/common/5/5f/Slifer_the_Sky_Dragon.jpg")} alt="..." />
        //         </div>
        //         <div className="txt">
        //               <h2>奧西里斯之天空龍</h2>
        //               <p>
        //                 日文名	オシリスの天空竜
        //                 英文名	Slifer the Sky Dragon
        //                 卡片種類	效果怪獸
        //                 卡片密碼	10000020
        //                 使用限制	無限制
        //                 種族	幻神獸
        //               </p>
        //               <a href="http://lisbunny.nctu.me/" className="btn">more</a>
        //         </div>
        //     </div>
        //     <div className="item">
        //         <div className="pic"><img src={("https://img.moegirl.org/common/0/0e/Obelisk_the_Tormentor.jpg")} alt="..." /></div>
        //         <div className="txt">
        //             <h2> 欧贝利斯克之巨神兵 </h2>
        //             <p>
        //                 オベリスクの巨神兵
        //                 英文名	Obelisk the Tormentor
        //                 卡片种类	效果怪兽
        //                 卡片密码	10000000
        //                 使用限制	无限制
        //                 种族	幻神兽
        //             </p>
        //             <a href="http://lisbunny.nctu.me/" className="btn">more</a>
        //         </div>
        //     </div>
        //     <div className="item">
        //         <div className="pic"><img src={("https://img.moegirl.org/common/2/2b/The_Winged_Dragon_of_Ra_.jpg")} alt="..." /></div>
        //         <div className="txt">
        //             <h2>太陽神之翼神龍</h2>
        //             <p>ラーの翼神竜
        //                 英文名	The Winged Dragon of Ra
        //                 卡片種類	效果怪獸
        //                 卡片密碼	10000010
        //                 使用限制	無限制
        //                 種族	幻神獸
        //             </p>
        //             <a href="http://lisbunny.nctu.me/" className="btn">more</a>
        //         </div>
        //     </div>
           
        // </div>
   
