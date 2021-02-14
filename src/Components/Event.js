import React from "react";

import {
  Details,
  HeaderSpan,
  InfoLi,
  InfoSpan,
  InfoUl,
  SubHeaderSpan,
  Summary,
} from "./StyledEvent";

export const Event = ({
  title,
  date,
  location,
  summary,
  prereqs,
  photos,
  links,
}) => {
  //const { isPreview, changeIsPreview } = useState(false);

  const linkComps = links
    ? links.map(({ href, linkText }) => (
        <li>
          <a key={linkText} href={href}>
            {linkText}
          </a>
        </li>
      ))
    : [];

  const imageComps = photos
    ? photos.map(({ alt, src }) => (
        <img width={300} key={alt} src={src} alt={alt} />
      ))
    : [];

  return (
    <Details>
      <Summary>
        <HeaderSpan>{title}</HeaderSpan> on{" "}
        <SubHeaderSpan>{date}</SubHeaderSpan>
      </Summary>
      <InfoUl>
        <InfoLi>
          <InfoSpan>Location: </InfoSpan>
          {location}
        </InfoLi>
        <InfoLi>
          <InfoSpan>Summary: </InfoSpan>
          {summary}
        </InfoLi>
        <InfoLi>
          <InfoSpan>Pre-requisites: </InfoSpan>
          {prereqs}
        </InfoLi>
        <InfoLi>
          <InfoSpan>Helpful links: </InfoSpan>
          <ul>{linkComps}</ul>
        </InfoLi>
        <InfoLi>{imageComps}</InfoLi>
      </InfoUl>
    </Details>
  );
};
