import {
    RemoteCausalRepoProtocol,
    SharedPartitionsVersion,
} from '@casual-simulation/aux-common';

/**
 * Defines an interface for the configuration that the web client should try to pull from the server.
 */
export interface WebConfig {
    /**
     * The protocol version.
     */
    version: 1 | 2;

    /**
     * The protocol that should be used for realtime connections.
     */
    causalRepoConnectionProtocol: RemoteCausalRepoProtocol;

    /**
     * The URL that should be used for realtime connections.
     */
    causalRepoConnectionUrl?: string;

    /**
     * The version of the shared partitions that should be used.
     */
    sharedPartitionsVersion?: SharedPartitionsVersion;

    /**
     * The HTTP Origin that should be used for VM Iframes.
     */
    vmOrigin?: string;

    /**
     * The HTTP origin that should be used for auth iframes.
     */
    authOrigin?: string;

    /**
     * The HTTP origin that should be used for records.
     */
    recordsOrigin?: string;

    /**
     * Whether collaboration should be disabled.
     * Setting this to true will replace the shared partition of simulations
     * with tempLocal partitions.
     */
    disableCollaboration?: boolean;

    /**
     * The URL that should be used to bootstrap AB1.
     */
    ab1BootstrapURL?: string;

    /**
     * The API key that should be used for the ArcGIS mapping API.
     */
    arcGisApiKey?: string;

    /**
     * The app name that should be used for the Jitsi meet portal.
     */
    jitsiAppName?: string;

    /**
     * The API Key that should be used for what3words integration.
     */
    what3WordsApiKey?: string;

    /**
     * Gets the player mode of this CasualOS version.
     * 
     * - "player" indicates that the instance has been configured for experiencing AUXes.
     * - "builder" indicates that the instance has been configured for building AUXes.
     */
    playerMode?: 'player' | 'builder';
}
