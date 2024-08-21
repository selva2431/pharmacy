import { Box, Input ,Image} from "@chakra-ui/react";
import styles from "./about.module.css";


let one = ["About Pharma","Customers Speak","In the News","Career","Terms and Conditions","Privacy Policy","Fees and Payments Policy","Shipping and Delivery Policy","Return, Refund and Cancellation Policy","Contact"];
let two = ["Browse by A-Z","Browse by Manufacturers","Health Articles","Offers / Coupons","FAQs"];
let three = ["Patients Alike","Facebook","Twitter","LinkedIn","Youtube","Refer & Earn"]
let a = "https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png";
let b = "https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png";
let c = "https://play.google.com/store/apps/details?id=com.NetmedsMarketplace.Netmeds&hl=en&pli=1";
let d = "https://apps.apple.com/in/app/netmeds-india-ki-pharmacy/id1011070011";
export default function Footer(){
    
    return (<>
        <Box background={"white"} p="1rem">
            <Box pl="4rem" pr={"4rem"} color="gray">
            
            </Box>
            <Box className={styles.Stack}>
                <Box className={styles.StackOne}>
                    <Box>COMPANY</Box>
                    {one?.map((el,i)=>{
                        return (<Box key={i}>{el}</Box>)
                    })}
                </Box>
                <Box className={styles.StackOne}>
                    <Box>SHOPPING</Box>
                    {two?.map((el,i)=>{
                        return (<Box key={i}>{el}</Box>)
                    })}
                </Box>
                <Box className={styles.StackOne}>
                    <Box>SOCIAL</Box>
                    {three?.map((el,i)=>{
                        return (<Box key={i}>{el}</Box>)
                    })}
                </Box>
                <Box className={styles.StackOne}>
                </Box>
            </Box>
            <hr />
            <Box className={styles.footerBottom}>
            <Box> </Box>
            <Box>Copyright. All Rights Reserved</Box>
            <Box> </Box>
            </Box>
        </Box>
    </>)
}