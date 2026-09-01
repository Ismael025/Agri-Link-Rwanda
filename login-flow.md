#  login to agri-link will follow the bellow pathens: 

```mermaid
graph TD
     A([1. enter email]) -->B([2. enter password])
     B --> C[Press login]
     C --> D{verify the credentials}
     D -- no -->E[3. please enter the correct email&passwd]
     D -- yes -->F[4. customer dashboard]

```