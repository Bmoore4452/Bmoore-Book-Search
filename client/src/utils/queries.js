import {gql} from '@apollo/client'

export const QUERY_BOOK = gql`
query book{
    book{
        _id
        name
    }
}
`