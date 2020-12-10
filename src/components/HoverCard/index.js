import { ReactNativeNumberFormat } from "../../actions/CurrencyFormat";
import PanoIcon from "../../images/panorama.svg";
import { Hover, HoverDiv, HoverPara, Link, IconImg } from "./Styles";

function HoverCard(props) {
  return (
    <Hover>
      <HoverDiv>
        <Link href={`https://www.youvisit.com/${props.link}`} target="_blank">
          <IconImg src={PanoIcon} />
          <HoverPara>Launch Tour</HoverPara>
        </Link>
        <Link
          href={`https://www.savingforcollege.com/calculators/financial-aid-calculator`}
          target={`_blank`}
        >
          <HoverPara>
            <ReactNativeNumberFormat
              value={props.tuition}
            ></ReactNativeNumberFormat>
          </HoverPara>
        </Link>
      </HoverDiv>
    </Hover>
  );
}

export default HoverCard;
