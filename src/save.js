/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const regex = /(<([^>]+)>)/gi;

	return (
		props.attributes.imgID && (
			<figure
				{...useBlockProps.save()}
				className={`${useBlockProps.save().className} ${props.attributes.imgMargin ? "" : "no-margin"} ${props.attributes.maxWidthLimit ? "width-limit" : ""}`}
			>
				<img
					className={` hauteur-${props.attributes.imgHeightLimit} ${
						props.attributes.imgAjust && "cover"
					} `}
					src={props.attributes.imgURL}
					alt={props.attributes.imgAlt}
					width={props.attributes.imgWidth}
					height={props.attributes.imgHeight}
					style={
						props.attributes.imgAjust
							? {
									objectPosition: `center ${props.attributes.imgOffsetVerticalPosition}%`,
							  }
							: { objectPosition: "0 center" }
					}
				/>
				{!!props.attributes.figcaptionContent.replace(regex, "").length && (
					<RichText.Content
						tagName="figcaption"
						value={props.attributes.figcaptionContent}
					/>
				)}
			</figure>
		)
	);
}
