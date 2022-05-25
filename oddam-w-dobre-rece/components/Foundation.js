import styles from "../styles/Foundation.module.scss";
import styles2 from "../styles/Goals.module.scss"

import Image from "next/image";
import {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";





export default function Foundation() {

    const dummyFundList = [
        {
            name: 'Fundacja "Dbam o Zdrowie"',
            goal: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
            interests: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
        },
        {
            name: 'Fundacja “Dla dzieci”',
            goal: 'Pomoc dzieciom z ubogich rodzin.',
            interests: 'ubrania, meble, zabawki'
        },
        {
            name: 'Fundacja “Bez domu”',
            goal: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
            interests: 'ubrania, jedzenie, ciepłe koce'
        },
        {
            name: 'xxx',
            goal: 'xxx',
            interests: 'xxx'
        },
        {
            name: 'yyy',
            goal: 'yyy',
            interests: 'yyy'
        },
        {
            name: 'zzz',
            goal: 'zzz',
            interests: 'zzz'
        },{
            name: 'qqq',
            goal: 'qqq',
            interests: 'qqq'
        },
    ]

    const arr = []
    const newDummyFundListPages = Math.ceil(dummyFundList.length / 3)
    console.log(newDummyFundListPages)

    for (let i=0; i<newDummyFundListPages; i++) {
        let smallArr = dummyFundList.slice(i * 3, (i+1) * 3)
        arr.push(smallArr)
    }

    console.log(arr)

    // const newDummyFundList = []
    // const newDummyFundListPages = Math.ceil(dummyFundList.length / 3)
    // console.log(newDummyFundListPages)
    //
    // for (let i=0; i < dummyFundList.length; i+3) {
    //     let newArr = []
    //     newArr.push(dummyFundList[i], dummyFundList[i+1],dummyFundList[i+2])
    //     newDummyFundList.push(newArr)
    // }
    //
    // console.log(newDummyFundList)


    const [activeButton, setActiveButton] = useState(1)


    function handleClick(val) {
        return function (e) {
            const pickedButton = e.target.value
            console.log(pickedButton)
            setActiveButton(val)
        }
    }

    const [page, setPage] = useState(1)
    function handlePage(val) {
        return function (e) {
            const pickedButton = e.target.value
            console.log(pickedButton)
            setPage(val)

            // pageSelected.classList.add(".red")
        }
    }

    return (
        <>
            <div className={styles2.container}>
                <div className={styles2.textCont}>
                    <h2>Wystarczą 4 proste kroki</h2>
                    <Image src={require("../public/Decoration.svg")} width="253px" height="33px"></Image>
                </div>
                <div className={styles.buttonCont}>
                    {activeButton === 1 ? <button id="button1" className={styles.active}  onClick={handleClick(1)}>Fundacjom</button> : <button id="button1" onClick={handleClick(1)}>Fundacjom</button>}
                    {activeButton === 2 ? <button id="button2" className={styles.active}  onClick={handleClick(2)}>Organizacjom pozarządowym</button> : <button id="button2" onClick={handleClick(2)}>Organizacjom pozarządowym</button>}
                    {activeButton === 3 ? <button id="button3" className={styles.active} onClick={handleClick(3)}>Lokalnym zbiórkom</button> : <button id="button3" onClick={handleClick(3)}>Lokalnym zbiórkom</button>}
                </div>
                <div>
                    {activeButton === 1 && (<>
                        <h3>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h3>
                        {/*{arr.map((el, index) => (<>*/}
                        {/*    <section key={index} className={styles.red}>*/}
                        {/*        {el.map(el2 => (<>*/}
                        {/*            <div>*/}
                        {/*                <h2>{el2.name}</h2>*/}
                        {/*                <h3>Cel i misja: {el2.goal}</h3>*/}
                        {/*            </div>*/}
                        {/*            <p>{el2.interests}</p>*/}
                        {/*        </>))}*/}
                        {/*    </section>*/}
                        {/*</>))}*/}
                        {<>
                            <section key={page} className={styles.red}>
                                {arr[(page-1)].map(el2 => (<>
                                    <div>
                                        <h2>{el2.name}</h2>
                                        <h3>Cel i misja: {el2.goal}</h3>
                                    </div>
                                    <p>{el2.interests}</p>
                                </>))}
                            </section>
                        </>}

                        {arr.map((el, index) => (<>
                            <button value={index+1} onClick={handlePage(index+1)}>{index+1}</button>
                            </>))}

                    </>)}
                    {activeButton === 2 && <h3>Lorem ipsum</h3>}
                    {activeButton === 3 && <h3>Ala ma kota</h3>}
                </div>
            </div>
        </>
    )
}