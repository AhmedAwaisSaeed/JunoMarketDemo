import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../shared/styles/common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  text: {
    ...typography.title,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  buttonContainer: {
    width: '100%',
    marginTop: spacing.md,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
}); 