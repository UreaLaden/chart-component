import { mergeStyleSets } from "@fluentui/merge-styles";
import { darkBrown, redOrange, white } from "../utils/Colors";

export const styles = mergeStyleSets({
    container: {
        height: "125px",
        width: "50%",
        backgroundColor: redOrange,
        borderRadius: "20px",
        margin: "50px auto 20px auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    infoContainer: {
        justifyContent: "center",
        marginLeft: "40px",
    },
    text: {
        fontFamily: 'DM Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '23px',
        color:"#FFFFFF"
    },
    amount: {
        fontFamily: 'DM Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '42px',
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
        height:"48px",
        width:"48px",
        backgroundColor:darkBrown,
        borderRadius:"25px",
        'grid-row-start': '1',
        'grid-column-start': '1',
    },
    secondaryCircle:{
        height:"42px",
        width:"42px",
        border:"2px solid #FFFFFF",
        borderRadius:"25px",
        'grid-row-start': '1',
        'grid-column-start': '1',
        transform:"translateX(-50%)"
    }
})