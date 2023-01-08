import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

/*
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* */

type AffairsPropsType = {
    data: AffairType[], // need to fix any
    setFilter: (filter: string) => void,
    deleteAffairCallback: (id: number) => void,
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')


    // export type AffairType = {
    //     _id: number, // need to fix any
    //     name: string, // need to fix any
    //     priority: string   // warning
    // }

    const mappedAffairs = props.data.map((affair: AffairType) => (
        <Affair
            key={affair._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={affair}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={cnAll}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={cnHigh}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={cnMiddle}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={cnLow}
                >
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
