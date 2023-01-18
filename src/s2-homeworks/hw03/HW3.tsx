import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType
* 2 - указать нужный тип в useState с users
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами

* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: number // need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers: Function, users: UserType[]) => { // need to fix any
    const user = { name // need to fix
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'} className={s2.container}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
