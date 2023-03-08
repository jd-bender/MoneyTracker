import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 224,
            width: 250
        }
    }
};

const getStyles = (
    item: string,
    selectedItem: readonly string[],
    theme: Theme
) => {
    const selectedTheme =
        selectedItem.indexOf(item) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium;

    return {
        fontWeight: selectedTheme
    };
};

export default function MultipleSelectChip(props: any) {
    const theme = useTheme();

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel>{props.title}</InputLabel>
                <Select
                    multiple
                    value={props.selectedItems}
                    onChange={props.handleChange}
                    input={<OutlinedInput label={props.title} />}
                    renderValue={(selected) => (
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                        >
                            {selected.map((value: any) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {props.items.map((item: any) => (
                        <MenuItem
                            key={item.id}
                            value={item.name}
                            style={getStyles(item, props.selectedItems, theme)}
                        >
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
