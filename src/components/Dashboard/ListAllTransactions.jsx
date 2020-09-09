import React, {useState, useEffect} from 'react'
import TransactionsList from './TransactionsList'
import authentication from '../../services/authentication'
import accounts from '../../services/accounts'
import categoriesService from '../../services/categories'
import IndividualAccountStatisticBox from './IndividualAccountStatisticBox'

const ListAllTransactions = (props) => {
    const type = props.match.params.type
    const typeId = props.match.params.id

    const [currentUser, setCurrentUser]= useState(props.currentUser)

    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();
        if(response.message) {
            return []
        } else {
            return response
        }
    }

    const [filterMsg, setFilterMsg] = useState('disabled')

    const [typeData, setTypeData]=useState({
        typeName: ''
    })

    const {typeName} = typeData

    const setName = async ()=>{
        if( type === 'account'){
            const typeName = await accounts.getOne(typeId)
            setTypeData({
                typeName: typeName.name
            })
        } else if( type === 'category'){
            const typeName = await categoriesService.getOne(typeId)
            setTypeData({
                typeName: typeName.name
            })
        }
    }

    useEffect(() => {
        async function fetchCurrentUser (){
            const data = await checkAuthentication()
            setCurrentUser(data)
        } 
    props.changeCurrentContent(`${type} ${typeName}`)
        setName()
        if (!currentUser.id){
            fetchCurrentUser()
        } 
        // eslint-disable-next-line
    }, [currentUser, typeName])

    return (
        <div>
            {
                type ==='account'?<IndividualAccountStatisticBox currentUser={currentUser} typeId={typeId}/>: null
            }
            
            <TransactionsList 
                type={type}
                typeId={typeId}
                currentUser={props.currentUser}
                filterMsg={filterMsg}
                setFilterMsg ={setFilterMsg}
            />
        </div>
    )
}

export default ListAllTransactions
