import gql from "graphql-tag";

export const QUERY_ME = gql`
    {
        me{
            _id
            username
            email
            savedBooks{
                [authors]
                description
                bookId
                image
                link
                title
            }
        }
    }
`;
