import {StringBuilder} from "@gallink/oxygen";

export class SqlStringBuilder extends StringBuilder {

    public toString(): string {
        return super.toString().trim();
    }

}
