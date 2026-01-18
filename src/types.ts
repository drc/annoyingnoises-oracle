export interface SoundChecksums {
	md5: string;
}

export interface SoundObject {
	storageClass: string;
	uploaded: string;
	checksums: SoundChecksums;
	httpEtag: string;
	etag: string;
	size: number;
	version: string;
	key: string;
}

export interface SoundListData {
	objects: SoundObject[];
	truncated: boolean;
	delimitedPrefixes: string[];
}

export interface SoundResponse {
	data: SoundListData;
}
