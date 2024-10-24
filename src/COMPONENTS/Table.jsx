import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PerformanceImage from './img/Performance.png'; // Importing image
import { Switch, Typography } from '@mui/material';

const Signal = ({ signals }) => {
    return (
        <Box display="flex" gap={1}>
            {signals.map((signal, index) => (
                <Avatar
                    key={index}
                    sx={{ bgcolor: signal.color, width: 24, height: 24, fontSize: '12px' }}
                >
                    {signal.label}
                </Avatar>
            ))}
        </Box>
    );
};

export default function MyTable() {
    
    const StyledHeadCell = styled(TableCell)(({ theme }) => ({
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#98A0AC',
    }));

    const StyledCell = styled(TableCell)(({ theme }) => ({
        fontSize: '16px',
        fontWeight: 'bold',
        width: '200px',
    }));

    const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
        backgroundColor: '#F5F7FA',
        borderRadius: '10px',
        maxHeight: 400,
        overflowX: 'auto',
        whiteSpace: 'nowrap',
    }));

    const StyledTable = styled(Table)(({ theme }) => ({
        minWidth: 1200,
    }));
    const members = [
        {
            name: 'George Fernandes',
            avatar: 'https://i.pravatar.cc/300?img=1',
            designation: 'Visual Designer',
            dep: 'Design',
            signals: [
                { label: 'C', color: '#4CAF50' },
                { label: 'E', color: '#FFEB3B' },
                { label: 'T', color: '#FFC107' },
                { label: 'U', color: '#F44336' },
            ],
            sum: 3,
            rpname: { name: 'Steven', avatar: 'https://i.pravatar.cc/300?img=5' }, // Added avatar for reporting
            role: 'Employee',
            mail: 'georgefernandes@gmail.com',
            experience: '3 Yrs 4 Mon',
            online: true,
        },
        {
            name: 'Emilie Clarke',
            avatar: 'https://i.pravatar.cc/300?img=2',
            designation: 'Visual Designer',
            dep: 'Design',
            signals: [
                { label: 'C', color: '#4CAF50' },
                { label: 'E', color: '#FFC107' },
                { label: 'T', color: '#FFEB3B' },
                { label: 'U', color: '#F44336' },
            ],
            sum: 2,
            rpname: { name: 'Alicia Dsouza', avatar: 'https://i.pravatar.cc/300?img=6' }, // Added avatar for reporting
            role: 'Employee',
            mail: 'emilieclarkegmail.com',
            experience: '3 Yrs 4 Mon',
            online: true,
        },
        {
            name: 'Jason Dominic',
            avatar: 'https://i.pravatar.cc/300?img=3',
            designation: 'Full Stack Developer',
            dep: 'Engineering',
            signals: [
                { label: 'C', color: '#4CAF50' },
                { label: 'E', color: '#FFEB3B' },
                { label: 'T', color: '#FFC107' },
                { label: 'U', color: '#F44336' },
            ],
            sum: 3,
            rpname: { name: 'Steven', avatar: 'https://i.pravatar.cc/300?img=5' }, // Added avatar for reporting
            role: 'Manager',
            mail: 'jasondominic@gmail.com',
            experience: '3 Yrs 4 Mon',
            online: true,
        },
        {
            name: 'Bruce Banner',
            avatar: 'https://i.pravatar.cc/300?img=4',
            designation: 'Front End Developer',
            dep: 'Engineering',
            signals: [
                { label: 'C', color: '#FFC107' },
                { label: 'E', color: '#FFEB3B' },
                { label: 'T', color: '#4CAF50' },
                { label: 'U', color: '#F44336' },
            ],
            sum: 4,
            rpname: { name: 'Steven', avatar: 'https://i.pravatar.cc/300?img=5' }, // Added avatar for reporting
            role: 'Admin',
            mail: 'brucebanner@gmail.com',
            experience: '3 Yrs 4 Mon',
            online: false,
        }
    ];

    return (
        <StyledTableContainer>
            <StyledTable stickyHeader>
                <TableHead>
                    <TableRow>
                        {[
                            'Name',
                            'Designation',
                            'Department',
                            'Signals',
                            'Overall Performance',
                            'Reporting To',
                            'Role',
                            'Email',
                            'Experience',
                            'Status',
                        ].map((header, idx) => (
                            <StyledHeadCell key={idx} align="left">
                                {header}
                            </StyledHeadCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.map((member, index) => (
                        <TableRow key={index}>
                            {/* Name with Avatar */}
                            <StyledCell>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar
                                        src={member.avatar}
                                        alt={member.name}
                                        sx={{ width: 32, height: 32, marginRight: 1 }}
                                    />
                                    {member.name}
                                </div>
                            </StyledCell>

                            <TableCell align="left">{member.designation}</TableCell>
                            <TableCell align="left">{member.dep}</TableCell>

                            <TableCell align="left">
                                <Signal signals={member.signals} />
                            </TableCell>
                            <TableCell>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <Avatar
                                        src={PerformanceImage}
                                        alt="Performance"
                                        sx={{ width: 32, height: 32 }}
                                    />
                                </Box>
                            </TableCell>
                            <TableCell align="left">
                                <Box display="flex" alignItems="center">
                                    <Avatar
                                        src={member.rpname.avatar}
                                        alt={member.rpname.name}
                                        sx={{ width: 24, height: 24, marginRight: 1 }}
                                    />
                                    <Typography>{member.rpname.name}</Typography>
                                    <Typography color='green'> + 3 More</Typography>
                                </Box>
                            </TableCell>

                            <TableCell align="left">{member.role}</TableCell>
                            <TableCell align="left">{member.mail}</TableCell>
                            <TableCell align="left">{member.experience}</TableCell>
                            <TableCell align="left">
                                <Box display={'flex'} alignItems="center">
                                    <Switch checked={member.online} />
                                    {member.online ? 'Active' : 'Deactive'}
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    );
}
