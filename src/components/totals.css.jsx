import { mergeStyleSets } from "@fluentui/merge-styles";
import { darkBrown, lightBrown } from "../utils/Colors";

export const styles = mergeStyleSets({
    container: {
        height: "125px",
        width: "100%",
        borderRadius: "20px",
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
        fontSize: '2vw',
        lineHeight: '23px',
        color:lightBrown
    },
    amount: {
        fontFamily: 'DM Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '5vw',
        lineHeight: '8vw',
        color:darkBrown
    },
    stats: {
        justifyContent: "center",
        marginRight: "40px"
    },
    change:{
        fontFamily:"DM Sans, sans-serif",
        fontWeight: 600,
        fontSize: '3vw',
        lineHeight: '4vw',
        textAlign: 'right',
        color:darkBrown
    },
    timeFrame:{
        fontFamily:"DM Sans, sans-serif",
        fontWeight: 400,
        fontSize: '2vw',
        lineHeight: '4vw',
        textAlign: 'right',
        color:lightBrown
    }
})