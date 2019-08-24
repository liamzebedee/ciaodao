import React from 'react'
import Link from 'next/link';

const UserHandle = ({ link=false, user, id }) => {
    let format = null
    if(user == null) {
        format = '#'+id
    } else {
        format = '@'+user.username
    }

    if(user) {
        return <Link href={`/user/${user.username}`}>
            {format}
        </Link>
    } else {
        return <Link href={`/user/?id=${id}`}>
            {format}
        </Link>
    }
}


export { UserHandle }