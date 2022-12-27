import { mergeStyleSets } from "@fluentui/merge-styles";
import { darkBrown, redOrange } from "../utils/Colors";

export const styles = mergeStyleSets({
    balanceContainer: {
        height: "15vw",
        width: "50vw",
        backgroundColor: redOrange,
        borderRadius: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    infoContainer: {
        justifyContent: "center",
        marginLeft: "40px",
    },
    text: {
        fontFamily: 'DM Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '2vw',
        color:"#FFFFFF"
    },
    amount: {
        fontFamily: 'DM Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '3vw',
        lineHeight: '4vw',
        color:"#FFFFFF",
        paddingTop:"8px"
    },
    image: {
        justifySelf: "center",
        alignSelf:"center",
        marginRight: "40px",
        display:"grid",
        "grid-template-columns":"1fr"
    },
    circle:{
        height:"5vw",
        width:"5vw",
        backgroundColor:darkBrown,
        borderRadius:"50%",
        'grid-row-start': '1',
        'grid-column-start': '1',
    },
    secondaryCircle:{
        height:"4vw",
        width:"4vw",
        border:"2px solid #FFFFFF",
        borderRadius:"50%",
        'grid-row-start': '1',
        'grid-column-start': '1',
        transform:"translateX(-50%)"
    }
})