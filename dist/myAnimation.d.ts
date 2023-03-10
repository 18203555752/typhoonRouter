export interface AnimationParmas {
    length: number;
    callBack: (cur: number) => void;
    successCallback?: () => void;
}
export default function myAnimation(parmas: AnimationParmas): () => void;
