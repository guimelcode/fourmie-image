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
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import {
	Placeholder,
	Button,
	PanelBody,
	PanelRow,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
	__experimentalSpacer as Spacer,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const onSelectImage = (image) => {
		console.log("🚀 ~ file: edit.js ~ line 52 ~ onSelectImage ~ image", image);
		props.setAttributes({
			imgID: image.id,
			imgURL: image.url,
			imgAlt: image.alt,
			imgWidth: image.width,
			imgHeight: image.height,
		});
	};

	const onRemoveImage = () => {
		props.setAttributes({
			imgID: null,
			imgURL: null,
			imgAlt: null,
			imgWidth: null,
			imgHeight: null,
		});
	};

	const onImgAjust = (value) => {
		props.setAttributes({
			imgAjust: value,
		});
	};

	const onImgHeightChange = (value) => {
		props.setAttributes({
			imgHeightLimit: value,
		});
	};

	const onImgMargin = (value) => {
		props.setAttributes({
			imgMargin: value,
		});
	};
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Gestion de l'image">
					<Spacer>
						<ToggleControl
							label="Marges pour l'image"
							help={
								props.attributes.imgMargin
									? "Marges par défaut du thème"
									: "Pas de marge"
							}
							checked={props.attributes.imgMargin}
							onChange={(value) => onImgMargin(value)}
						/>
					</Spacer>

					<Spacer>
						<ToggleControl
							label="Ajustment de l'image"
							help={
								props.attributes.imgAjust
									? "Ajustement du cadre l'image"
									: "Image au format original"
							}
							checked={props.attributes.imgAjust}
							onChange={(value) => onImgAjust(value)}
						/>
					</Spacer>

					{props.attributes.imgAjust && (
						<>
							<Spacer>
								<RadioGroup
									label="Hauteur de l'image"
									checked={props.attributes.imgHeightLimit}
									onChange={onImgHeightChange}
								>
									<Radio value="petite">Petite</Radio>
									<Radio value="moyenne">Moyenne</Radio>
									<Radio value="grande">Grande</Radio>
								</RadioGroup>
							</Spacer>
							<Spacer>
								<RangeControl
									label="Décalage dans la hauteur"
									value={props.attributes.imgOffsetVerticalPosition}
									onChange={(value) => {
										props.setAttributes({ imgOffsetVerticalPosition: value });
									}}
								/>
							</Spacer>
						</>
					)}
					<Spacer>
						<ToggleControl
							label="Limitation de largeur maximum l'image"
							help={
								props.attributes.maxWidthLimit
									? "Limite la largeur de l'image à 55vw"
									: "Pas de limite"
							}
							checked={props.attributes.maxWidthLimit}
							onChange={() => props.setAttributes({maxWidthLimit: !props.attributes.maxWidthLimit})}
						/>
					</Spacer>
				</PanelBody>
			</InspectorControls>

			{!props.attributes.imgID ? (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						value={props.attributes.imgID}
						render={({ open }) => (
							<Placeholder
								icon="image-alt"
								label={__("Photo", "la-fourmi-e")}
								instructions={__("Selectionner une image", "la-fourmi-e")}
							>
								<Button isSecondary isLarge onClick={open} icon="upload">
									{__("Importer", "la-fourmi-e")}
								</Button>
							</Placeholder>
						)}
					/>
				</MediaUploadCheck>
			) : (
				<figure
					{...useBlockProps()}
					className={`${useBlockProps().className} ${
						props.attributes.imgMargin ? "" : "no-margin"
					} ${props.attributes.maxWidthLimit ? "width-limit" : ""}`}
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

					{props.isSelected && (
						<Button
							className="fourmi-e-remove-image"
							onClick={onRemoveImage}
							icon="dimiss"
						>
							{__("Supprimer l'image", "la-fourmi-e")}
						</Button>
					)}
					<RichText
						tagName="figcaption"
						multiline="p"
						placeholder={__("Écrire du contenu", "la-fourmi-e")}
						value={props.attributes.figcaptionContent}
						onChange={(figcaptionContent) =>
							props.setAttributes({ figcaptionContent: figcaptionContent })
						}
					/>
				</figure>
			)}
		</Fragment>
	);
}
