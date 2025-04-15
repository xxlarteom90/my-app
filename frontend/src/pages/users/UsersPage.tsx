import { UserStorage } from '../helloPage/UserStorage'
import { UsersList } from './UsersList'

export  function UsersPage() {
  return (
    <div>
      <UserStorage/>
      <UsersList/>
    </div>
  )
}
