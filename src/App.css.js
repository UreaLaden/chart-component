import { mergeStyleSets } from "@fluentui/merge-styles";
import { lightBrown } from "./utils/Colors";

export const styles = mergeStyleSets({
    rect:{
        width:"95%",
        height:"1px",
        margin:"40px auto",
        backgroundColor:'#F8E9DD',
        borderRadius:"1px"
    },
    app:{}
})