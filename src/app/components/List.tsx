"use client"
import { clientType } from '@/app/commons/types'
import styles from '@/app/globals.module.css'

type clientListType = {
    clientList: Array<clientType>
}

export default function List({clientList} : clientListType){
    return(
        <main>

            <div className={styles.List}>

                <div className={styles.listTop}>

                <div className={styles.nameListTop}>Name</div>

                <div className={styles.addressListTop}>Age</div>

                <div className={styles.addressListTop}>State</div>   

                <div className={styles.action}>Actions</div>
            </div>


            {clientList.map((client, index) =>
            <div key={index} className={styles.clientList}>

                <div className={styles.nameClientList}>{client.name}</div>

                <div className={styles.addressClientList}>{client.age}</div>

                <div className={styles.addressClientList}>{client.state}</div>


                <div className={styles.actions}>

                <button className={styles.delte} >delete</button>

                </div>

                </div>
                )}

            </div>

        </main>
    )
}