import type {PostJSON} from "../meower-types";

/**
 * A CL Turbo packet.
 */
export interface Packet {
	cmd: string;
	val: string | {};
	payload?: string | {};
	listener?: string;
}

export interface UlistPacket extends Packet {
	val: String;
}

export const enum PostType {
	NORMAL = "1",
	INBOX = "2"
}

// (had a post typedef in meower.js)
export interface PostPacket extends Packet {
	val: PostJSON;
}

export interface ListenerPacket extends Packet {
	listener: string;
}

export interface ModePacket extends Packet {
	val: {
		mode: string;
		payload: any;
	};
}

/**
 * The value returned by sendListener().
 */
export interface SendListenerReturn {
	packets: Packet[];
	statuscode: string | null;
	ok: boolean;
}

export interface ModeRequestReturn {
	payload: any;
	statuscode: string | null;
	ok: boolean;
}

export interface Options {
	logging?: boolean;
	connect?: string | URL;
}
