import { styled } from "@mui/material";


export const StyledText = styled("h2")`
  width: 163px;
  font-weight: 700;
  font-size: 36px;
  line-height: 41px;
  text-align: center;
  background: linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);
  background-clip: "text";
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  margin:0 auto;
  padding:0;

  `;

export const HeadingText = styled("div")`
    width: 321px;
    height: 160px;
    left: calc(50% - 321px/2);
    top: 94px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    margin: 0 auto;

    .imagine {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 36px;
        color: #240D57;
        margin: 0;
        text-align: center;
    }
`;

export const TextContent = styled("h3")`
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #4F4F4F;
    font-style: normal;
    font-weight: 300;
    margin: 0;

  `;


export const ButtenText = styled("p")`
   font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    /* identical to box height */
    text-align: right;
    color: #FFFFFF;
    margin: 0;

  `;
