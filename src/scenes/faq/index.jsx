import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

import React from 'react'

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
        <Header title = "FAQ" subtitle="Frequently asked questions page" />

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Where can I subscribe to your newsletter?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    We often send out our newsletter with news and great offers. We will never disclose your data to third parties and you can unsubscribe from the newsletter at any time. Subscribe here to our newsletter.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Where can I edit my billing and shipping address?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Can i order free sample copy of magazine?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Unfortunately, we’re unable to offer free samples. As a retailer, we buy all magazines from their publishers at the regular trade price. However, you could contact the publisher directly.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Are unsold magazines sent back to the publisher?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                We usually sell all copies of the magazines offered in our shop. Some publishers and distributors offer the retailer the option of returning any unsold magazines. However, because our range includes magazines from countries such as Australia, the USA and the United Kingdom, sending them back would involve considerable effort in terms of logistics and would also be very expensive. We therefore choose not to return any unsold magazines. At the same time, this allows us to also offer our customers older or out-of-print magazines.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Where can I find your disclaimer and privacy policy?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                All data will be treated as strictly confidential and will not be disclosed to third parties. Take a look on our disclaimer and Privacy Policy
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Can i change the displayed currency?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Yes, sure. You can change the default currency (Swiss Francs/CHF) to any other currency by scrolling down to the bottom of each page or change it here (please note that the currency will switch back to Swiss Francs/CHF in the checkout due to billing reasons):
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ