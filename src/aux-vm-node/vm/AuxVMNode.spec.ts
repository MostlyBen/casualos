import { AuxVMNode } from './AuxVMNode';
import { AuxConfig, AuxUser } from '@casual-simulation/aux-vm';
import {
    ConnectionInfo,
    USERNAME_CLAIM,
    DEVICE_ID_CLAIM,
    SESSION_ID_CLAIM,
    SERVER_ROLE,
} from '@casual-simulation/aux-common';
import { NodeAuxChannel } from './NodeAuxChannel';
import {
    MemoryPartition,
    createMemoryPartition,
} from '@casual-simulation/aux-common';

console.log = jest.fn();

describe('AuxVMNode', () => {
    let memory: MemoryPartition;
    let config: AuxConfig;
    let user: AuxUser;
    let device: ConnectionInfo;
    let vm: AuxVMNode;
    let channel: NodeAuxChannel;
    beforeEach(async () => {
        memory = createMemoryPartition({
            type: 'memory',
            initialState: {},
        });

        config = {
            config: {
                versionHash: 'abc',
                version: 'v1.0.0',
            },
            partitions: {
                shared: {
                    type: 'memory',
                    partition: memory,
                },
            },
        };
        user = {
            id: 'server',
            name: 'Server',
            token: 'token',
            username: 'server',
        };
        device = {
            claims: {
                [USERNAME_CLAIM]: 'server',
                [DEVICE_ID_CLAIM]: 'serverDeviceId',
                [SESSION_ID_CLAIM]: 'serverSessionId',
            },
            roles: [SERVER_ROLE],
        };

        channel = new NodeAuxChannel(user, device, config);
        vm = new AuxVMNode(channel);
    });

    it('should initialize the channel', async () => {
        await vm.init();

        const bot = memory.state['server'];
        expect(bot).toBeTruthy();
    });
});
