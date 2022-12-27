import { mergeStyleSets } from "@fluentui/merge-styles";

export const styles = mergeStyleSets({
    rect:{
        width:"95%",
        height:"1px",
        margin:"10% auto",
        backgroundColor:'#F8E9DD',
        borderRadius:"1px"
    },
    mainContainer:{
        margin: '20% 10% 20% 10%',
        width:'75vw',
    },
    stackContainer:{
        alignItems:"center"
    }
})